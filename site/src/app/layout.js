import NavBar from "./components/styles/navbar.js";
import "./components/styles/body.css"

export default function RootLayout({children}) {
  return (
    <html lang="pt-BR">
    <body>
    <NavBar></NavBar>
    {children}
    </body>
    </html>
  );
}