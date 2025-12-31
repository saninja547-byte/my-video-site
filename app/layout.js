// Tạo file app/layout.js
echo // app/layout.js > app\layout.js
echo export default function RootLayout({ children }) { >> app\layout.js
echo   return ( >> app\layout.js
echo     <html lang="vi"> >> app\layout.js
echo       <body style={{ margin: 0, padding: 0, fontFamily: 'Arial, sans-serif' }}> >> app\layout.js
echo         {children} >> app\layout.js
echo       </body> >> app\layout.js
echo     </html> >> app\layout.js
echo   ); >> app\layout.js
echo } >> app\layout.js