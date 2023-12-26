import RootLayout from "../components/layout";
import '../styles/globals.css';

function MyApp({Component, PageProps}){
    return (
    <RootLayout>
        <Component {...PageProps} />
    </RootLayout>
    )
}
export default MyApp;