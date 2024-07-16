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
          {formNavigation({ type })}
        </div>
      </div>
    </div>
  );
};

const formNavigation = (props) => {
  const { type } = props;
  if (type === "login") {
    return (
      <p className="text-slate-500 mt-4 text-sm">
        Don't have account?{" "}
        <Link to="/register" className="font-semibold text-blue-700">
          Register
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-slate-500 mt-4 text-sm">
        Already have account?{" "}
        <Link to="/login" className="font-semibold text-blue-700">
          Login
        </Link>
      </p>
    );
  }
};

export default AuthLayout;
