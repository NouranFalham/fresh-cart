import ForgetPasswordHero from "../components/forgetPassword/forgetPasswordHero";
import VerifyCodeForm from "../components/forgetPassword/verifyPassword";


export default function VerifyScreen() {
    return (
        <main className="py-6">
            <div className="container p-5 grid lg:gap-12 lg:grid-cols-2 mx-auto max-w-7xl">
                <ForgetPasswordHero />
                <VerifyCodeForm/>
            </div>
        </main>
    );
}