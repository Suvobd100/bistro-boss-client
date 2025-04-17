import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location,user);
    
  
    if (loading) {
      return <span className="loading loading-bars loading-xl"></span>;
    //   return <LoadingSpinner/>;
    }
   
    if (!user?.email) {
        // Add the explicit redirect path and pass the location state
        return <Navigate to="/auth/login" state={{ from: location }} replace />;
    }
    return children;
    
  };
  
  export default PrivateRoute;
  