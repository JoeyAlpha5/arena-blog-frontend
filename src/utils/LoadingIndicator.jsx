import '../styles/Utils.css'
const LoadingIndicator = ()=>{
    return (
        <div className="loading-indicator">
            <div className="spinner-grow" role="status">
            </div>
            <div className="spinner-grow" role="status">
            </div>
            <div className="spinner-grow" role="status">
            </div>
        </div>
    );
}
export default LoadingIndicator;