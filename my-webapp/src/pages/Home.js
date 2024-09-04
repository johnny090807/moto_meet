export default function Home() {
    return (
        <div>
            <input type="button" onClick={() => {
                window.location.href = "/Home";
            }} value="Home" />
            <p>
                You're on the home page!
            </p>
        </div>
    );
}