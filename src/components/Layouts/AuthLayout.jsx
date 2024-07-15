
const AuthLayout = (props) => {
    const { children, tittle } = props;
    return (
        <div className="w-full max-w-xs border rounded-md">
        <div className="row p-4 shadow-md">
          <h1 className="text-2xl font-bold mb-2 text-blue-700">{tittle}</h1>
          <p className="text-slate-600 font-medium mb-4">Welcome, please enter the details</p>
          {children}
        </div>
      </div>
    )
}

export default AuthLayout;