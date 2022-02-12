function ErrorFallBack({error, resetErrorBoundary}){
    return(
        <div role = "alert">
           <p>Something went wrong</p>
           <pre>{error.message}</pre>
           <button onClick={resetErrorBoundary}>Loading...</button>
        </div>
    )
}

export default ErrorFallBack;