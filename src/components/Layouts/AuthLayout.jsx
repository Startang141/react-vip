import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  const { children, tittle, type } = props;
  return (
    <div className="flex min-h-screen items-center justify-center space-x-2">
      <div className="w-full max-w-xs border rounded-md">
        <div className="row p-4 shadow-md">
          <h1 className="text-2xl font-bold mb-2 text-blue-700">{tittle}</h1>
          <p className="text-slate-600 font-medium mb-4">
            Welcome, please enter the details
          </p>
          {children}
          <p className="text-slate-500 mt-4 text-sm">
            {type === "login"
              ? "Don't have account? "
              : "Already have account? "}

            {type === "login" && (
              <Link to="/register" className="font-semibold text-blue-700">
                Register
              </Link>
            )}
            {type === "register" && (
              <Link to="/login" className="font-semibold text-blue-700">
                Login
              </Link>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
