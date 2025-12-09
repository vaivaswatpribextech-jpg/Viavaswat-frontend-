// import React, { useState } from 'react';
// import { LogIn, UserPlus, Image as ImageIcon, LayoutDashboard } from 'lucide-react'; 

// // Screen Names (Screens ke naam)
// const WelcomeScreen = {

//     WELCOME: 'WELCOME',
//     LOGIN: 'LOGIN',
//     SIGNUP: 'SIGNUP',
//     // PROFILE_SETUP: 'PROFILE_SETUP',
//     DASHBOARD: 'DASHBOARD',
// };

// // --- 1. WelcomeScreen Component (Initial View) ---
// // navigateTo prop ka upyog screen badalne ke liye kiya ja raha hai
// const WelcomeScreen = ({ navigateTo }) => {
//   return (
//     <div className="min-h-screen flex items-center justify-center p-4 bg-gray-900 text-white relative overflow-hidden">
      
//       {/* Background Effect */}
//       <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'linear-gradient(to top, #1a202c, transparent)', backgroundSize: 'cover' }}></div>
//       <div className="absolute inset-0 z-0 bg-cover bg-center opacity-30" style={{ 
//           backgroundImage: "url('https://placehold.co/1000x1000/000000/FFFFFF?text=Univa+Vibes')"
//       }}></div>

//       <div className="z-10 w-full max-w-sm flex flex-col items-center text-center p-6 bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700">
        
//         {/* ब्रांड लोगो/नाम */}
//         <h1 className="text-6xl font-extrabold text-white mb-2 font-inter">
//             Univa
//         </h1>
//         <p className="text-xl text-gray-400 font-light mb-10">
//             Connect. Create. Commerce.
//         </p>

//         {/* मुख्य संदेश */}
//         <h2 className="text-3xl font-semibold mb-3">
//             Welcome!
//         </h2>
//         <p className="text-gray-400 mb-12">
//             अपनी यात्रा शुरू करें, दुनिया भर के लोगों से जुड़ें और व्यापार करें।
//         </p>

//         {/* Call to Action Buttons */}
//         <div className="w-full space-y-4">
          
//           {/* Sign Up Button */}
//           <button 
//             onClick={() => navigateTo(SCREENS.SIGNUP)}
//             className="flex items-center justify-center w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-4 rounded-xl transition duration-300 shadow-lg"
//           >
//             <UserPlus className="w-5 h-5 mr-2" />
//             नया अकाउंट बनाएँ (Sign Up)
//           </button>
          
//           {/* Login Button */}
//           <button 
//             onClick={() => navigateTo(SCREENS.LOGIN)}
//             className="flex items-center justify-center w-full bg-gray-700 hover:bg-gray-600 text-gray-300 font-bold py-3 px-4 rounded-xl transition duration-300 border border-gray-600"
//           >
//             <LogIn className="w-5 h-5 mr-2" />
//             लॉगिन करें (Login)
//           </button>
          
//         </div>

//         <p className="text-xs text-gray-500 mt-12">
//             आगे बढ़ने पर आप हमारी सेवा की शर्तों से सहमत होते हैं।
//         </p>

//       </div>
//     </div>
//   );
// };


// // --- 2. Login Component ---
// const Login = ({ navigateTo }) => {
//     const [formData, setFormData] = useState({
//         email: '',
//         password: ''
//     });
//     const [errors, setErrors] = useState({});
//     const [loading, setLoading] = useState(false);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({
//             ...prev,
//             [name]: value,
//         }));
//     };

//     const validate = () => {
//         let tempErrors = {};
//         let isValid = true;

//         if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
//             tempErrors.email = "वैध ईमेल आवश्यक है।";
//             isValid = false;
//         }
//         if (formData.password.length < 6) {
//             tempErrors.password = "पासवर्ड कम से कम 6 अक्षर का होना चाहिए।";
//             isValid = false;
//         }

//         setErrors(tempErrors);
//         return isValid;
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setErrors({}); 

//         if (validate()) {
//             setLoading(true);
//             try {
//                 console.log("Logging in with:", formData);
                
//                 // डमी API कॉल
//                 await new Promise(resolve => setTimeout(resolve, 1500)); 
                
//                 console.log("सफलतापूर्वक लॉगिन हुआ!");
//                 // सफल लॉगिन के बाद डैशबोर्ड पर नेविगेट करें
//                 navigateTo(SCREENS.DASHBOARD); 

//             } catch (apiError) {
//                 console.error("Login failed:", apiError);
//                 setErrors({ general: "लॉगिन विफल रहा। कृपया क्रेडेंशियल्स जांचें।" });
//             } finally {
//                 setLoading(false);
//             }
//         }
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100 text-center"> 
//             <div className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-sm text-center">
                
//                 {/* शीर्ष ब्रांडिंग */}
//                 <div className="text-center mb-8">
//                     <h1 className="text-xl font-bold text-gray-800 text-center">Univa</h1>
//                     <p className="text-sm text-gray-500 mt-1">Connect. Create. Commerce.</p> 
//                 </div>

//                 <h2 className="text-xl font-medium text-blue-600 mb-6">अपने अकाउंट में लॉगिन करें</h2> 

//                 <form className="space-y-4" onSubmit={handleSubmit}>
                    
//                     {/* 1. Email Input */}
//                     <div>
//                         <input 
//                             type="email" 
//                             name="email"
//                             placeholder="ईमेल" 
//                             className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-gray-500'}`} 
//                             value={formData.email}
//                             onChange={handleChange}
//                             required
//                         />
//                         {errors.email && <p className="text-red-500 text-xs text-left mt-1">{errors.email}</p>}
//                     </div>

//                     {/* 2. Password Input */}
//                     <div>
//                         <input 
//                             type="password" 
//                             name="password"
//                             placeholder="पासवर्ड" 
//                             className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 ${errors.password ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-gray-500'}`} 
//                             value={formData.password}
//                             onChange={handleChange}
//                             required
//                         />
//                         {errors.password && <p className="text-red-500 text-xs text-left mt-1">{errors.password}</p>}
//                     </div>

//                     {errors.general && <p className="text-red-500 text-sm">{errors.general}</p>}

//                     {/* Login बटन */}
//                     <button 
//                         type="submit" 
//                         className="w-full text-white font-bold py-2.5 rounded-lg transition duration-200"
//                         style={{ backgroundColor: '#8B7D4F' }} 
//                         disabled={loading}
//                     >
//                         {loading ? 'लॉगिन हो रहा है...' : 'लॉगिन करें'}
//                     </button>
//                 </form>
                
//                 {/* Forgot Password Link */}
//                 <p className="mt-4 text-xs text-gray-500 hover:text-gray-700 cursor-pointer">
//                     पासवर्ड भूल गए?
//                 </p>

//                 {/* Link to Signup */}
//                 <div className="mt-8 text-sm">
//                     <p className="text-gray-600">अकाउंट नहीं है? 
//                         <button onClick={() => navigateTo(SCREENS.SIGNUP)} className="text-blue-600 font-medium hover:text-blue-800 ml-1">
//                             अभी साइन अप करें
//                         </button>
//                     </p>
//                 </div>
//                  {/* Back to Welcome */}
//                 <button 
//                     onClick={() => navigateTo(SCREENS.WELCOME)} 
//                     className="mt-4 text-xs text-gray-400 hover:text-gray-600"
//                 >
//                     &larr; Welcome Screen
//                 </button>

//             </div>
//         </div>
//     );
// };


// // --- 3. Signup Component ---
// const Signup = ({ navigateTo }) => {
//     const [formData, setFormData] = useState({
//         email: '',
//         phoneNumber: '',
//         password: '',
//         confirmPassword: '',
//         isAdult: false,
//     });
    
//     const [errors, setErrors] = useState({});
//     const [loading, setLoading] = useState(false);

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setFormData(prev => ({
//             ...prev,
//             [name]: type === 'checkbox' ? checked : value,
//         }));
//     };

//     const validate = () => {
//         let tempErrors = {};
//         let isValid = true;

//         if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
//             tempErrors.email = "Valid email is required.";
//             isValid = false;
//         }
//         if (!formData.phoneNumber || !/^\d{10}$/.test(formData.phoneNumber)) {
//             tempErrors.phoneNumber = "10-digit phone number is required.";
//             isValid = false;
//         }
//         if (formData.password.length < 6) {
//             tempErrors.password = "Password must be at least 6 characters.";
//             isValid = false;
//         }
//         if (formData.password !== formData.confirmPassword) {
//             tempErrors.confirmPassword = "Passwords do not match.";
//             isValid = false;
//         }
//         if (!formData.isAdult) {
//             tempErrors.isAdult = "You must confirm you are 18 or older.";
//             isValid = false;
//         }

//         setErrors(tempErrors);
//         return isValid;
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setErrors({}); 

//         if (validate()) {
//             setLoading(true);
//             try {
//                 console.log("Submitting data to API:", formData);
                
//                 // डमी API कॉल
//                 await new Promise(resolve => setTimeout(resolve, 2000)); 
                
//                 console.log("Account created successfully! Now set up your profile.");
                
//                 // Profile Setup पर नेविगेट करें
//                 navigateTo(SCREENS.PROFILE_SETUP); 

//             } catch (apiError) {
//                 console.error("Sign Up failed:", apiError);
//                 setErrors({ general: "Registration failed. Please try again." });
//             } finally {
//                 setLoading(false);
//             }
//         }
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100 text-center"> 
//             <div className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-sm text-center">
                
//                 {/* शीर्ष ब्रांडिंग */}
//                 <div className="text-center mb-8">
//                     <h1 className="text-xl font-bold text-gray-800 text-center">Univa</h1>
//                     <p className="text-sm text-gray-500 mt-1">Connect. Create. Commerce.</p> 
//                 </div>

//                 <h2 className="text-xl font-medium text-blue-600 mb-6">Create Your Account</h2> 

//                 <form className="space-y-4" onSubmit={handleSubmit}>
                    
//                     {/* 1. Email Input */}
//                     <div>
//                         <input 
//                             type="email" 
//                             name="email"
//                             placeholder="Email" 
//                             className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-gray-500'}`} 
//                             value={formData.email}
//                             onChange={handleChange}
//                             required
//                         />
//                         {errors.email && <p className="text-red-500 text-xs text-left mt-1">{errors.email}</p>}
//                     </div>

//                     {/* 2. Phone Number Input */}
//                     <div>
//                         <input 
//                             type="tel" 
//                             name="phoneNumber"
//                             placeholder="Phone Number" 
//                             className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 ${errors.phoneNumber ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-gray-500'}`} 
//                             value={formData.phoneNumber}
//                             onChange={handleChange}
//                             required
//                         />
//                         {errors.phoneNumber && <p className="text-red-500 text-xs text-left mt-1">{errors.phoneNumber}</p>}
//                     </div>

//                     {/* 3. Password Input */}
//                     <div>
//                         <div className="relative">
//                             <input 
//                                 type="password" 
//                                 name="password"
//                                 placeholder="Password" 
//                                 className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 ${errors.password ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-gray-500'}`} 
//                                 value={formData.password}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </div>
//                         {errors.password && <p className="text-red-500 text-xs text-left mt-1">{errors.password}</p>}
//                     </div>

//                     {/* 4. Confirm Password Input */}
//                     <div>
//                         <div className="relative">
//                             <input 
//                                 type="password" 
//                                 name="confirmPassword"
//                                 placeholder="Confirm Password" 
//                                 className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 ${errors.confirmPassword ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-gray-500'}`} 
//                                 value={formData.confirmPassword}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </div>
//                         {errors.confirmPassword && <p className="text-red-500 text-xs text-left mt-1">{errors.confirmPassword}</p>}
//                     </div>

//                     {/* 5. Age Checkbox */}
//                     <div className="text-left mt-2 flex items-center">
//                         <input
//                             type="checkbox"
//                             name="isAdult"
//                             id="isAdult"
//                             checked={formData.isAdult}
//                             onChange={handleChange}
//                             className="mr-2 text-yellow-700 focus:ring-yellow-700 rounded"
//                         />
//                         <label htmlFor="isAdult" className="text-sm text-gray-600">I am 18 or older</label>
//                     </div>
//                     {errors.isAdult && <p className="text-red-500 text-xs text-left mt-1">{errors.isAdult}</p>}
                    
//                     {errors.general && <p className="text-red-500 text-sm">{errors.general}</p>}

//                     {/* 6. Sign Up बटन */}
//                     <button 
//                         type="submit" 
//                         className="w-full text-white font-bold py-2.5 rounded-lg transition duration-200"
//                         style={{ backgroundColor: '#8B7D4F' }} 
//                         disabled={loading}
//                     >
//                         {loading ? 'Creating Account...' : 'Sign Up'}
//                     </button>
//                 </form>
                
//                 {/* Back to Login Link */}
//                 <div className="mt-8">
//                     <button onClick={() => navigateTo(SCREENS.LOGIN)} className="text-sm text-gray-500 hover:text-gray-700">
//                         &larr; Back to Login
//                     </button>
//                 </div>

//             </div>
//         </div>
//     );
// };


// // --- 4. ProfileSetup Component ---
// const ProfileSetup = ({ navigateTo }) => {
//     const [selectedFile, setSelectedFile] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [previewUrl, setPreviewUrl] = useState(null);

//     // 1. फ़ाइल चयन (File Selection) हैंडलर
//     const handleFileChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             setSelectedFile(file);
//             // Create object URL for image preview
//             setPreviewUrl(URL.createObjectURL(file)); 
//         }
//     };

//     // 2. अपलोड फ़ंक्शन (या स्किप के बाद आगे बढ़ें)
//     const handleProceed = async () => {
//         setLoading(true);
//         try {
//             console.log("Uploading/Skipping profile setup.");
//             // डमी API कॉल
//             await new Promise(resolve => setTimeout(resolve, 1500)); 
            
//             console.log('Profile setup complete! Navigating to Dashboard.');
            
//             // Successful setup leads to Dashboard
//             navigateTo(SCREENS.DASHBOARD); 

//         } catch (error) {
//             console.error("Setup failed:", error);
//             console.error('Setup failed. Please try again.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100 text-center"> 
//             <div className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-sm text-center">
                
//                 <h2 className="text-xl font-medium text-blue-600 mb-6">प्रोफ़ाइल पिक्चर सेट करें</h2> 
//                 <p className="text-sm text-gray-500 mb-8">
//                     अपने अकाउंट के लिए एक प्रोफ़ाइल फोटो चुनें। (यह चरण वैकल्पिक है)
//                 </p>

//                 {/* इमेज प्रीव्यू */}
//                 <div className="mb-6 flex justify-center">
//                     {previewUrl ? (
//                         <img 
//                             src={previewUrl} 
//                             alt="प्रोफ़ाइल प्रीव्यू" 
//                             className="w-24 h-24 rounded-full object-cover border-4 border-yellow-600 shadow-md"
//                         />
//                     ) : (
//                         <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-sm border-4 border-gray-300">
//                             <ImageIcon className="w-6 h-6" />
//                         </div>
//                     )}
//                 </div>

//                 {/* 4. फ़ाइल इनपुट */}
//                 <div className="mb-4">
//                     <label 
//                         htmlFor="file-upload" 
//                         className="cursor-pointer inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg transition duration-200"
//                     >
//                         {selectedFile ? 'फ़ाइल बदलें' : 'फ़ाइल चुनें'}
//                     </label>
//                     <input 
//                         id="file-upload" 
//                         type="file" 
//                         accept="image/*"
//                         onChange={handleFileChange}
//                         className="hidden" 
//                     />
//                     {selectedFile && <p className="text-sm text-gray-500 mt-2 truncate">{selectedFile.name}</p>}
//                 </div>

//                 <div className="space-y-3 mt-8">
//                     {/* 5. Proceed बटन (Upload या Skip दोनों के लिए) */}
//                     <button 
//                         onClick={handleProceed}
//                         className="w-full text-white font-bold py-2.5 rounded-lg transition duration-200"
//                         style={{ backgroundColor: '#8B7D4F' }} 
//                         disabled={loading}
//                     >
//                         {loading ? 'आगे बढ़ रहे हैं...' : (selectedFile ? 'अपलोड करें और आगे बढ़ें' : 'छोड़ दें और आगे बढ़ें')}
//                     </button>
                    
//                     {/* Back to Login */}
//                     <button 
//                         onClick={() => navigateTo(SCREENS.LOGIN)} 
//                         className="w-full text-xs text-gray-500 hover:text-gray-700 mt-4"
//                     >
//                         &larr; Go Back
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };


// // --- 5. Dashboard Component ---
// const Dashboard = ({ navigateTo }) => {
//     return (
//         <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-800 text-white text-center">
//             <div className="bg-gray-700 p-8 rounded-xl shadow-2xl w-full max-w-lg">
//                 <LayoutDashboard className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
//                 <h1 className="text-3xl font-extrabold mb-2">🎉 Dashboard - Welcome to Univa!</h1>
//                 <p className="text-gray-300 mb-8">आपका अकाउंट पूरी तरह से सेट है। अब आप अपनी जर्नी शुरू कर सकते हैं।</p>
                
//                 <button 
//                     onClick={() => navigateTo(SCREENS.WELCOME)}
//                     className="flex items-center justify-center mx-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl transition duration-300"
//                 >
//                     <LogIn className="w-4 h-4 mr-2 transform rotate-180" />
//                     Logout (लॉग आउट)
//                 </button>
//             </div>
//         </div>
//     );
// }

// // --- 6. App Component (Root - Screen Router) ---
// function App() {
//   const [currentScreen, setCurrentScreen] = useState(SCREENS.WELCOME);

//   const navigateTo = (screenName) => {
//     setCurrentScreen(screenName);
//   };

//   const renderScreen = () => {
//     switch (currentScreen) {
//       case SCREENS.LOGIN:
//         return <Login navigateTo={navigateTo} />;
//       case SCREENS.SIGNUP:
//         return <Signup navigateTo={navigateTo} />;
//       case SCREENS.PROFILE_SETUP:
//         return <ProfileSetup navigateTo={navigateTo} />;
//       case SCREENS.DASHBOARD:
//         return <Dashboard navigateTo={navigateTo} />;
//       case SCREENS.WELCOME:
//       default: // Default case to ensure something always renders
//         return <WelcomeScreen navigateTo={navigateTo} />;
//     }
//   };

//   return (
//     <div className="App">
//         {/* Render the current screen */}
//         {renderScreen()}
//     </div>
//   );
// }

// export default WelcomeScreen;
