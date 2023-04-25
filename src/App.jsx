import { useEffect, useState } from "react";
import { fetchImages } from "./api";
import './App.css';


function Header() {
    return (
        <header className="hero is-dark is-bold">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title"><a href="">Poke DATABASE</a></h1>
                </div>
            </div>
        </header>
    );
}

function Image(props) {
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image">
                    <img src={props.src} />
                </figure>
            </div>
        </div>
    );
}

function Loading() {
    return <p>Loading...</p>;
}

function Gallery(props) {
    const { urls } = props;

    if (urls == null) {
        return <Loading />;
    }

    return (
        <div className="columns is-vcentered is-multiline is-mobile">
            {urls.map((url) => {
                return (
                    <div key={url} className="column is-3">
                        <Image src={url} />
                    </div>
                );
            })}
        </div>
    );
}

function Form(props) {
    function handleSubmit(event) {
        event.preventDefault();
        const { color } = event.target.elements;
        props.onFormSubmit(color.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="field has-addons">
                    <div className="control is-expanded">
                        <div className="select is-fullwidth">
                            <select name="color" defaultValue="">
                                <option value="black">Black</option>
                                <option value="blue">Blue</option>
                                <option value="brown">Brown</option>
                                <option value="gray">Gray</option>
                                <option value="green">Green</option>
                                <option value="pink">Pink</option>
                                <option value="purple">Purple</option>
                                <option value="red">Red</option>
                                <option value="white">White</option>
                                <option value="yellow">Yellow</option>
                            </select>
                        </div>
                    </div>
                    <div className="control">
                        <button type="submit" className="button is-dark">
                            Reload
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

function Main() {
    const [urls, setUrls] = useState(null);

    useEffect(() => {
        fetchImages("black").then((urls) => {
            setUrls(urls);
        });
    }, []);

    function reloadImages(color) {
        fetchImages(color).then((urls) => {
            setUrls(urls);
        });
    }

    return (
        <main>
            <section className="section">
                <div className="container">
                    <Form onFormSubmit={reloadImages} />
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <Gallery urls={urls} />
                </div>
            </section>
        </main>
    );
}

function Footer() {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <p>Images are retrieved from PokeAPI</p>
                <p>
                    <a href="https://pokeapi.co/" target={'_blank'}>PokeAPI</a>
                </p>
            </div>
        </footer>
    );
}

function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
