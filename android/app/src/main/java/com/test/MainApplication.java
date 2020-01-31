package com.test;

import android.app.Application;

import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.test.generated.BasePackageList;

import org.unimodules.adapters.react.ReactAdapterPackage;
import org.unimodules.adapters.react.ModuleRegistryAdapter;
import org.unimodules.adapters.react.ReactModuleRegistryProvider;
import org.unimodules.core.interfaces.Package;
import org.unimodules.core.interfaces.SingletonModule;
import expo.modules.constants.ConstantsPackage;
import expo.modules.permissions.PermissionsPackage;
import expo.modules.filesystem.FileSystemPackage;

import android.location.LocationManager;
import android.location.LocationListener;
import android.location.Location;
import com.test.service.LocationService;
import android.content.Context;
import android.os.Bundle;
import android.content.Intent;
import com.facebook.react.HeadlessJsTaskService;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {
  private final ReactModuleRegistryProvider mModuleRegistryProvider = new ReactModuleRegistryProvider(
    new BasePackageList().getPackageList(),
    Arrays.<SingletonModule>asList()
  );
  private final LocationListener listener = new LocationListener() {
  @Override
    public void onStatusChanged(String provider, int status, Bundle extras) {
    }
    
  @Override
    public void onProviderEnabled(String provider) {
    }
  @Override
    public void onProviderDisabled(String provider) {
    }
  @Override
      public void onLocationChanged(Location location) {
      Intent myIntent = new Intent(getApplicationContext(), LocationService.class);
      getApplicationContext().startService(myIntent);
    HeadlessJsTaskService.acquireWakeLockNow(getApplicationContext());
      }
  };
  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      List<ReactPackage> packages = new PackageList(this).getPackages();
      packages.add(new ModuleRegistryAdapter(mModuleRegistryProvider));
      return packages;
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    LocationManager locationManager = (LocationManager) getSystemService(Context.LOCATION_SERVICE);     
    // Start requesting for location
    locationManager.requestLocationUpdates(LocationManager.GPS_PROVIDER, 2000, 1, listener);
    SoLoader.init(this, /* native exopackage */ false);
 }
}
