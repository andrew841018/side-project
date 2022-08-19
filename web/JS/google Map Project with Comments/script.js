'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  constructor(coords, distance, duration) {
    this.coords = coords; //lat,lng
    this.duration = duration; //min
    this.distance = distance; //km
  }
  _setDescription() {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}
    `;
  }
}
class Running extends Workout {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
  }
  calcPace() {
    this.pace = this.distance / this.duration;
    return this.pace;
  }
}
class Cycling extends Workout {
  type = 'cycling';
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calSpeed();
  }
  calSpeed() {
    //hour
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}
class App {
  #map;
  #mapEvent;
  #mapZoomLevel = 13;
  #workouts = [];
  constructor() {
    //Get user's position
    this._getPosition();
    //Get data from local storage
    this._getLocalStorage();
    //submit=keypress "enter"
    //most function is class need to bind this,
    //as long as they are using 'this',especially for Even listener
    form.addEventListener('submit', this._newWorkout.bind(this));
    //當更改下拉式選單(input),trigger this function--->_toggleElevationField
    inputType.addEventListener('change', this._toggleElevationField);
    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
  }
  _getPosition() {
    //get your location
    if (navigator.geolocation) {
      //the first parameter need to be call back function,but _loadMap isn't
      //it means _loadMap doesn't have 'this'
      //so we bind 'this' to this function
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('Could not get your position');
        }
      );
    }
  }
  _loadMap(position) {
    //latitude & longitude is position.coords object property
    //經度＆緯度
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    //map is an id(div)
    const coords = [latitude, longitude];
    //13應該是地圖  大小
    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);
    //trigger when click on map
    this.#map.on('click', this._showForm.bind(this));
    //這裡this.#workouts已經由localStorage的內容所覆蓋，也就是頁面刷新前的資料
    //以此來確保頁面刷新資料仍然可以保存
    this.#workouts.forEach(work => {
      //mark each location in this.#workouts to the map
      this._renderWorkoutMarker(work);
    });
  }
  _showForm(mapE) {
    this.#mapEvent = mapE;
    //when click map,show the input field
    form.classList.remove('hidden');
    inputDistance.focus(); //focus on input(會出現輸入的指標)
  }
  _toggleElevationField() {
    //toggle:exist->remove,not exist->add
    //in css form_row--hidden is to hide,so two of them only one will appear
    //another will disappear
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }
  _hideForm() {
    //clear input field
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';
    form.style.display = 'none'; //hide the input form
    form.classList.add('hidden'); //將input form隱藏且往上移（改變Y軸的位置）
    //reset input form,但此時input form的位置已經被更改過，且透明度被設為0
    //因此無法看見
    setTimeout(() => (form.style.display = 'grid'), 1000);

    /*    
      整體而言，將物件上移且隱藏，下個物件會放在input form原本位置，之後input form會
      出現，但是位子會更靠上面，可以達到看起來input form被後面的物件覆蓋，但往上滑卻又
      能夠看到（因為上移過）的效果
    */
  }
  _newWorkout(e) {
    const validInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));
    const allPositive = (...inputs) => inputs.every(inp => inp > 0);
    e.preventDefault();
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;
    if (type === 'running') {
      const cadence = +inputCadence.value;
      if (
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      ) {
        return alert('Inputs have to be positive numbers!');
      }
      workout = new Running([lat, lng], distance, duration, cadence);
    }
    if (type === 'cycling') {
      const elevation = +inputElevation.value;
      //evevation can be negative
      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration)
      ) {
        return alert('Inputs have to be positive numbers!');
      }
      workout = new Cycling([lat, lng], distance, duration, elevation);
    }
    //push a class(Cycling) into Arry---so array become object
    this.#workouts.push(workout);
    this._renderWorkout(workout); //print workout history in form
    this._renderWorkoutMarker(workout); //workout is a class
    this._hideForm();
    this._setLocalStorage();
  }
  _renderWorkoutMarker(workout) {
    //mark location on the map
    L.marker(workout.coords) //read from class Cycling
      .addTo(this.#map)
      .bindPopup(
        //L.popup will set  點擊之後出現的視窗樣式
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          //declear type in Running and Cycling class
          className: `${workout.type}-popup`,
        }) //set content in L.marker
      )
      .setPopupContent(
        `${workout.type == 'running' ? '🏃‍♂️' : '🚴🏼‍♂️'}${workout.description}`
      )
      .openPopup();
  }
  _renderWorkout(workout) {
    workout._setDescription();
    console.log(workout.type);
    let html = `<li class="workout workout--${workout.type}" data-id="${
      workout.id
    }">
    <h2 class="workout__title">${workout.description}</h2>
    <div class="workout__details">
        <span class="workout__icon">${
          workout.type == 'running' ? '🏃‍♂️' : '🚴🏼‍♂️'
        }</span>
        <span class="workout__value">${workout.distance}</span>
        <span class="workout__unit">km</span>
    </div>
    <div class="workout__details">
        <span class="workout__icon">⏱</span>
        <span class="workout__value">${workout.duration}</span>
        <span class="workout__unit">min</span>
    </div>
         
    `;
    if (workout.type === 'running') {
      html += `<div class="workout__details">
        <span class="workout__icon">⚡️</span>
        <span class="workout__value">${workout.pace.toFixed(1)}</span>
        <span class="workout__unit">min/km</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">⛰</span>
        <span class="workout__value">${workout.cadence}</span>
        <span class="workout__unit">spm</span>
      </div>
    </li>`;
    }
    if (workout.type === 'cycling') {
      console.log(typeof workout.type);
      html += `<div class="workout__details">
        <span class="workout__icon">⚡️</span>
        <span class="workout__value">${workout.speed.toFixed(1)}</span>
        <span class="workout__unit">km/h</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">🦶🏼</span>
        <span class="workout__value">${workout.elevationGain}</span>
        <span class="workout__unit">m</span>
      </div>
      </li>`;
    }
    form.insertAdjacentHTML('afterend', html);
  }
  _moveToPopup(e) {
    //find the element itself,because you may click to text or input field
    //so we direct it to element itself--->class workout
    let workoutEl = e.target.closest('.workout');
    if (!workoutEl) return;
    //find the element we current click
    //this.#workouts is a class list,so workout is a class
    //so workout can access to coords
    const workout = this.#workouts.find(
      work => work.id === workoutEl.dataset.id
    );
    this.#map.setView(workout.coords, this.#mapZoomLevel, {
      animate: true, //using animate
      pan: {
        duration: 1, //duration of animate
      },
    });
  }
  _setLocalStorage() {
    //localStorage is an API
    //'workouts' is key,and this.#workouts is corresponding value
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
  }
  //when we get from LocalStorage it will remove relationship between
  //class too,it means we can't access parent member by inherient anymore
  _getLocalStorage() {
    //read data from localStorage by key
    const data = JSON.parse(localStorage.getItem('workouts'));
    if (!data) return;
    //assign object to another object
    this.#workouts = data;
  }
  //remove from localstorage and reload
  reset() {
    localStorage.removeItem('workouts');
    location.reload();
  }
}

let app = new App();
//more challenge
/*
1. sort workout by certain field(ex:distance,pace...)
2. rebuild Running and Cycling because localstorage remove relationship
between classes
3. (hard) using line instead of point(像是google map的路線那樣)

*/
