# PickleBay WebView Client

<p align="center">
  <img src="assets/logo.png" alt="PickleBay Logo" width="200"/>
</p>

A React Native mobile application that provides a WebView wrapper for the PickleBay website with enhanced native features and analytics integration.

## ✨ Features

### 📱 Core Functionality
- **Responsive WebView**
  - Seamlessly displays the PickleBay website within a native mobile application
  - Adaptive layout for different screen sizes

### 🔄 Navigation
- **Smart History Management**
  - Intuitive back and forward navigation
  - Native Android back button support
  - Gesture-based navigation

### 💾 Data Persistence
- **Session Management**
  - Auto-save of last visited URL
  - Seamless session restoration
  - Persistent browsing history

### ⚡ Performance
- **Error Handling**
  - Real-time network monitoring
  - Offline mode support
  - Smart retry mechanisms

### 🔄 User Experience
- **Interactive Features**
  - Smooth pull-to-refresh functionality
  - Visual loading indicators
  - Progress tracking for page loads

### 📊 Analytics
- **Usage Tracking**
  - Firebase Analytics integration
  - Navigation event logging
  - User behavior insights

## 🚀 Getting Started

### Prerequisites

- [ ] Node.js (v14 or higher) and npm/yarn
- [ ] React Native development environment
- [ ] Android Studio (for Android development)
- [ ] Firebase project with:
  - Analytics enabled
  - Valid `google-services.json`
  - API keys configured

### Technical Stack

| Technology | Purpose |
|------------|---------|
| React Native | Core framework |
| React Native WebView | Web content display |
| Firebase Analytics | Usage tracking |
| AsyncStorage | Local data persistence |
| TypeScript | Type safety |

### 📁 Project Structure

```plaintext
src/
├── components/
│   └── WebViewScreen.tsx   # Main WebView component
├── config/
│   └── .env               # Environment variables
└── android/
    └── app/
        └── google-services.json  # Firebase config
```


## 🛠️ Setup Guide
1. Clone & Install
```bash
git clone https://github.com/kaushalrathour/PickleBayWebViewCli.git
cd PickleBayWebViewCli
npm install
touch .env
```
2. Firebase Setup
   - Create a new Firebase project
   - Copy google-services.json to android/app/
   - Configure .env with Firebase credentials

3. Launch Application
```bash
npx react-native run-android
```
## 🔍 How It Works
### Initial Load
- Launches with default PickleBay URL
- Restores previous session state
- Initializes analytics tracking

### Navigation System
- Manages navigation state
- Handles hardware buttons
- Maintains navigation history

### Error Management
- Monitors network status
- Implements retry logic

### Analytics Integration
- Tracks page views
- Logs navigation events
- Monitors user interactions
