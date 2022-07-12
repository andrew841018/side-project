package com.example.tobuylist;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.view.Menu;
import android.support.design.widget.Snackbar;
import android.support.design.widget.NavigationView;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import androidx.navigation.NavController;
import androidx.navigation.Navigation;
import androidx.navigation.ui.AppBarConfiguration;
import androidx.navigation.ui.NavigationUI;

import android.support.v4.widget.DrawerLayout;
import android.support.v7.app.AppCompatActivity;
import android.widget.TextView;

import com.example.tobuylist.databinding.ActivityMainBinding;

public class MainActivity extends AppCompatActivity {

    private  ListView listView;
    //主畫面
    @Override
    protected void onCreate(Bundle savedInstanceState)  {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.listview);
        listView = (ListView) findViewById(R.id.list);
        //ListView 要顯示的內容
        String[] str = {"To buy list","台北市","台中市","台南市","高雄市"};
        //android.R.layout.simple_list_item_1 為內建樣式，還有其他樣式可自行研究
       ArrayAdapter <String>adapter = new ArrayAdapter<String>(this,
                android.R.layout.simple_list_item_1,
               str);
        listView.setAdapter(adapter);
    }
}