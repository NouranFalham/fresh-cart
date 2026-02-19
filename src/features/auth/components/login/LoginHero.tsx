import { faClock, faShieldHalved, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LoginHero() {
    return (
        <>
        <div className="hidden lg:block">
            <div className="text-center space-y-6">
                <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/2e5810ff3e-e750761ebcd4ae5907db.png" alt="shoping" />
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Fresh Groceries Delivered
                    </h2>
                    <p className="text-lg text-gray-600">
                        Join thousands of happy customers who trust FreshCart for their daily grocery need 
                    </p>
                    <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faTruck} 
                            className=" text-green-600 mr-2"
                            />
                            Free Delivery
                        </div>
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faShieldHalved} 
                            className=" text-green-600 mr-2"
                            />
                            Secure Payment
                        </div>
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faClock}
                            className=" text-green-600 mr-2"
                            />
                            24/7 Support
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
        </>
    )
}
