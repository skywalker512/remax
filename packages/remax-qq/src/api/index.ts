import promisify from './promisify';

export const getAppStub = getApp;

export const canIUse = qq.canIUse;
export const base64ToArrayBuffer = qq.base64ToArrayBuffer;
export const arrayBufferToBase64 = qq.arrayBufferToBase64;
export const getSystemInfoSync = qq.getSystemInfoSync;
export const getSystemInfo = promisify(qq.getSystemInfo);
export const getUpdateManager = qq.getUpdateManager;
export const getLaunchOptionsSync = qq.getLaunchOptionsSync;
export const onPageNotFound = qq.onPageNotFound;
export const onError = qq.onError;
export const onAudioInterruptionEnd = qq.onAudioInterruptionEnd;
export const onAppShow = qq.onAppShow;
export const onAppHide = qq.onAppHide;
export const offPageNotFound = qq.offPageNotFound;
export const offError = qq.offError;
export const offAudioInterruptionEnd = qq.offAudioInterruptionEnd;
export const offAudioInterruptionBegin = qq.offAudioInterruptionBegin;
export const offAppShow = qq.offAppShow;
export const offAppHide = qq.offAppHide;
export const setEnableDebug = promisify(qq.setEnableDebug);
export const getLogManager = qq.getLogManager;
export const switchTab = promisify(qq.switchTab);
export const reLaunch = promisify(qq.reLaunch);
export const redirectTo = promisify(qq.redirectTo);
export const navigateTo = promisify(qq.navigateTo);
export const navigateBack = promisify(qq.navigateBack);
export const showToast = promisify(qq.showToast);
export const showModal = promisify(qq.showModal);
export const showLoading = promisify(qq.showLoading);
export const showActionSheet = promisify(qq.showActionSheet);
export const hideToast = promisify(qq.hideToast);
export const hideLoading = promisify(qq.hideLoading);
export const showNavigationBarLoading = promisify(qq.showNavigationBarLoading);
export const setNavigationBarTitle = promisify(qq.setNavigationBarTitle);
export const setNavigationBarColor = promisify(qq.setNavigationBarColor);
export const hideNavigationBarLoading = promisify(qq.hideNavigationBarLoading);
export const setBackgroundTextStyle = promisify(qq.setBackgroundTextStyle);
export const setBackgroundColor = promisify(qq.setBackgroundColor);
export const showTabBarRedDot = promisify(qq.showTabBarRedDot);
export const showTabBar = promisify(qq.showTabBar);
export const setTabBarStyle = promisify(qq.setTabBarStyle);
export const setTabBarItem = promisify(qq.setTabBarItem);
export const setTabBarBadge = promisify(qq.setTabBarBadge);
export const removeTabBarBadge = promisify(qq.removeTabBarBadge);
export const hideTabBarRedDot = promisify(qq.hideTabBarRedDot);
export const hideTabBar = promisify(qq.hideTabBar);
export const loadFontFace = promisify(qq.loadFontFace);
export const stopPullDownRefresh = promisify(qq.stopPullDownRefresh);
export const startPullDownRefresh = promisify(qq.startPullDownRefresh);
export const pageScrollTo = promisify(qq.pageScrollTo);
export const createAnimation = qq.createAnimation;
export const setTopBarText = promisify(qq.setTopBarText);
export const nextTick = qq.nextTick;
export const getMenuButtonBoundingClientRect =
  qq.getMenuButtonBoundingClientRect;
export const onWindowResize = qq.onWindowResize;
export const offWindowResize = qq.offWindowResize;
export const onKeyboardHeightChange = qq.onKeyboardHeightChange;
export const getSelectedTextRange = qq.getSelectedTextRange;
export const request = promisify(qq.request);
export const downloadFile = promisify(qq.downloadFile);
export const uploadFile = promisify(qq.uploadFile);
export const sendSocketMessage = promisify(qq.sendSocketMessage);
export const onSocketOpen = qq.onSocketOpen;
export const onSocketMessage = qq.onSocketMessage;
export const onSocketError = qq.onSocketError;
export const onSocketClose = qq.onSocketClose;
export const connectSocket = promisify(qq.connectSocket);
export const closeSocket = promisify(qq.closeSocket);
export const stopLocalServiceDiscovery = promisify(
  qq.stopLocalServiceDiscovery
);
export const startLocalServiceDiscovery = promisify(
  qq.startLocalServiceDiscovery
);
export const onLocalServiceResolveFail = qq.onLocalServiceResolveFail;
export const onLocalServiceLost = qq.onLocalServiceLost;
export const onLocalServiceFound = qq.onLocalServiceFound;
export const onLocalServiceDiscoveryStop = qq.onLocalServiceDiscoveryStop;
export const offLocalServiceResolveFail = qq.offLocalServiceResolveFail;
export const offLocalServiceLost = qq.offLocalServiceLost;
export const offLocalServiceFound = qq.offLocalServiceFound;
export const offLocalServiceDiscoveryStop = qq.offLocalServiceDiscoveryStop;
export const createUDPSocket = qq.createUDPSocket;
export const setStorageSync = qq.setStorageSync;
export const setStorage = promisify(qq.setStorage);
export const removeStorageSync = qq.removeStorageSync;
export const removeStorage = promisify(qq.removeStorage);
export const getStorageSync = qq.getStorageSync;
export const getStorageInfoSync = qq.getStorageInfoSync;
export const getStorageInfo = promisify(qq.getStorageInfo);
export const getStorage = promisify(qq.getStorage);
export const clearStorageSync = qq.clearStorageSync;
export const clearStorage = promisify(qq.clearStorage);
export const createMapContext = qq.createMapContext;
export const saveImageToPhotosAlbum = promisify(qq.saveImageToPhotosAlbum);
export const previewImage = promisify(qq.previewImage);
export const getImageInfo = promisify(qq.getImageInfo);
export const compressImage = promisify(qq.compressImage);
export const chooseMessageFile = promisify(qq.chooseMessageFile);
export const chooseImage = promisify(qq.chooseImage);
export const saveVideoToPhotosAlbum = promisify(qq.saveVideoToPhotosAlbum);
export const createVideoContext = qq.createVideoContext;
export const chooseVideo = promisify(qq.chooseVideo);
export const stopVoice = promisify(qq.stopVoice);
export const setInnerAudioOption = promisify(qq.setInnerAudioOption);
export const playVoice = promisify(qq.playVoice);
export const pauseVoice = promisify(qq.pauseVoice);
export const getAvailableAudioSources = promisify(qq.getAvailableAudioSources);
export const createInnerAudioContext = qq.createInnerAudioContext;
export const createAudioContext = qq.createAudioContext;
export const stopBackgroundAudio = promisify(qq.stopBackgroundAudio);
export const seekBackgroundAudio = promisify(qq.seekBackgroundAudio);
export const playBackgroundAudio = promisify(qq.playBackgroundAudio);
export const pauseBackgroundAudio = promisify(qq.pauseBackgroundAudio);
export const onBackgroundAudioStop = qq.onBackgroundAudioStop;
export const onBackgroundAudioPlay = qq.onBackgroundAudioPlay;
export const onBackgroundAudioPause = qq.onBackgroundAudioPause;
export const getBackgroundAudioPlayerState = promisify(
  qq.getBackgroundAudioPlayerState
);
export const getBackgroundAudioManager = qq.getBackgroundAudioManager;
export const createLivePusherContext = qq.createLivePusherContext;
export const createLivePlayerContext = qq.createLivePlayerContext;
export const stopRecord = promisify(qq.stopRecord);
export const startRecord = promisify(qq.startRecord);
export const getRecorderManager = qq.getRecorderManager;
export const createCameraContext = qq.createCameraContext;
export const stopLocationUpdate = promisify(qq.stopLocationUpdate);
export const startLocationUpdateBackground = promisify(
  qq.startLocationUpdateBackground
);
export const startLocationUpdate = promisify(qq.startLocationUpdate);
export const openLocation = promisify(qq.openLocation);
export const onLocationChange = qq.onLocationChange;
export const getLocation = promisify(qq.getLocation);
export const chooseLocation = promisify(qq.chooseLocation);
export const updateShareMenu = promisify(qq.updateShareMenu);
export const showShareMenu = promisify(qq.showShareMenu);
export const hideShareMenu = promisify(qq.hideShareMenu);
export const getShareInfo = promisify(qq.getShareInfo);
export const createOffscreenCanvas = qq.createOffscreenCanvas;
export const createCanvasContext = qq.createCanvasContext;
export const canvasToTempFilePath = promisify(qq.canvasToTempFilePath);
export const canvasPutImageData = promisify(qq.canvasPutImageData);
export const canvasGetImageData = promisify(qq.canvasGetImageData);
export const saveFile = promisify(qq.saveFile);
export const removeSavedFile = promisify(qq.removeSavedFile);
export const openDocument = promisify(qq.openDocument);
export const getSavedFileList = promisify(qq.getSavedFileList);
export const getSavedFileInfo = promisify(qq.getSavedFileInfo);
export const getFileSystemManager = qq.getFileSystemManager;
export const getFileInfo = promisify(qq.getFileInfo);
export const login = promisify(qq.login);
export const checkSession = promisify(qq.checkSession);
export const navigateToMiniProgram = promisify(qq.navigateToMiniProgram);
export const navigateBackMiniProgram = promisify(qq.navigateBackMiniProgram);
export const getAccountInfoSync = qq.getAccountInfoSync;
export const getUserInfo = promisify(qq.getUserInfo);
export const reportMonitor = qq.reportMonitor;
export const reportAnalytics = qq.reportAnalytics;
export const requestPayment = promisify(qq.requestPayment);
export const authorize = promisify(qq.authorize);
export const openSetting = promisify(qq.openSetting);
export const getSetting = promisify(qq.getSetting);
export const chooseAddress = promisify(qq.chooseAddress);
export const openCard = promisify(qq.openCard);
export const addCard = promisify(qq.addCard);
export const chooseInvoiceTitle = promisify(qq.chooseInvoiceTitle);
export const chooseInvoice = promisify(qq.chooseInvoice);
export const startSoterAuthentication = promisify(qq.startSoterAuthentication);
export const checkIsSupportSoterAuthentication = promisify(
  qq.checkIsSupportSoterAuthentication
);
export const checkIsSoterEnrolledInDevice = promisify(
  qq.checkIsSoterEnrolledInDevice
);
export const getWeRunData = promisify(qq.getWeRunData);
export const stopBeaconDiscovery = promisify(qq.stopBeaconDiscovery);
export const startBeaconDiscovery = promisify(qq.startBeaconDiscovery);
export const onBeaconUpdate = qq.onBeaconUpdate;
export const onBeaconServiceChange = qq.onBeaconServiceChange;
export const getBeacons = promisify(qq.getBeacons);
export const stopWifi = promisify(qq.stopWifi);
export const startWifi = promisify(qq.startWifi);
export const setWifiList = promisify(qq.setWifiList);
export const onWifiConnected = qq.onWifiConnected;
export const onGetWifiList = qq.onGetWifiList;
export const getWifiList = promisify(qq.getWifiList);
export const getConnectedWifi = promisify(qq.getConnectedWifi);
export const connectWifi = promisify(qq.connectWifi);
export const addPhoneContact = promisify(qq.addPhoneContact);
export const writeBLECharacteristicValue = promisify(
  qq.writeBLECharacteristicValue
);
export const readBLECharacteristicValue = promisify(
  qq.readBLECharacteristicValue
);
export const onBLEConnectionStateChange = qq.onBLEConnectionStateChange;
export const onBLECharacteristicValueChange = qq.onBLECharacteristicValueChange;
export const notifyBLECharacteristicValueChange = promisify(
  qq.notifyBLECharacteristicValueChange
);
export const getBLEDeviceServices = promisify(qq.getBLEDeviceServices);
export const getBLEDeviceCharacteristics = promisify(
  qq.getBLEDeviceCharacteristics
);
export const createBLEConnection = promisify(qq.createBLEConnection);
export const closeBLEConnection = promisify(qq.closeBLEConnection);
export const stopBluetoothDevicesDiscovery = promisify(
  qq.stopBluetoothDevicesDiscovery
);
export const startBluetoothDevicesDiscovery = promisify(
  qq.startBluetoothDevicesDiscovery
);
export const openBluetoothAdapter = qq.openBluetoothAdapter;
export const onBluetoothDeviceFound = qq.onBluetoothDeviceFound;
export const onBluetoothAdapterStateChange = qq.onBluetoothAdapterStateChange;
export const getConnectedBluetoothDevices = promisify(
  qq.getConnectedBluetoothDevices
);
export const getBluetoothDevices = promisify(qq.getBluetoothDevices);
export const getBluetoothAdapterState = promisify(qq.getBluetoothAdapterState);
export const closeBluetoothAdapter = promisify(qq.closeBluetoothAdapter);
export const getBatteryInfoSync = qq.getBatteryInfoSync;
export const getBatteryInfo = promisify(qq.getBatteryInfo);
export const setClipboardData = promisify(qq.setClipboardData);
export const getClipboardData = promisify(qq.getClipboardData);
export const stopHCE = promisify(qq.stopHCE);
export const startHCE = promisify(qq.startHCE);
export const sendHCEMessage = promisify(qq.sendHCEMessage);
export const onHCEMessage = qq.onHCEMessage;
export const getHCEState = promisify(qq.getHCEState);
export const onNetworkStatusChange = qq.onNetworkStatusChange;
export const getNetworkType = promisify(qq.getNetworkType);
export const setScreenBrightness = promisify(qq.setScreenBrightness);
export const setKeepScreenOn = promisify(qq.setKeepScreenOn);
export const onUserCaptureScreen = qq.onUserCaptureScreen;
export const getScreenBrightness = promisify(qq.getScreenBrightness);
export const makePhoneCall = promisify(qq.makePhoneCall);
export const stopAccelerometer = promisify(qq.stopAccelerometer);
export const startAccelerometer = promisify(qq.startAccelerometer);
export const onAccelerometerChange = qq.onAccelerometerChange;
export const stopCompass = promisify(qq.stopCompass);
export const startCompass = promisify(qq.startCompass);
export const onCompassChange = qq.onCompassChange;
export const stopDeviceMotionListening = promisify(
  qq.stopDeviceMotionListening
);
export const startDeviceMotionListening = promisify(
  qq.startDeviceMotionListening
);
export const onDeviceMotionChange = qq.onDeviceMotionChange;
export const stopGyroscope = promisify(qq.stopGyroscope);
export const startGyroscope = promisify(qq.startGyroscope);
export const onGyroscopeChange = qq.onGyroscopeChange;
export const onMemoryWarning = qq.onMemoryWarning;
export const scanCode = promisify(qq.scanCode);
export const vibrateShort = promisify(qq.vibrateShort);
export const vibrateLong = promisify(qq.vibrateLong);
export const createWorker = qq.createWorker;
export const getExtConfigSync = qq.getExtConfigSync;
export const getExtConfig = promisify(qq.getExtConfig);
export const createSelectorQuery = qq.createSelectorQuery;
export const createIntersectionObserver = qq.createIntersectionObserver;
export const createRewardedVideoAd = qq.createRewardedVideoAd;
export const createInterstitialAd = qq.createInterstitialAd;
export const cloud = qq.cloud;
export const requestSubscribeMessage = promisify(qq.requestSubscribeMessage);
