const Header = ({ title }) => {
    let remove = window.location.pathname.slice(1, window.location.pathname.length)
    return (
        <h1> You are now on the: {remove} Page</h1>
    )
}

export default Header