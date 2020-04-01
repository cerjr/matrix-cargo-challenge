import React, {Component, Fragment} from 'react';
import Header from "../commons/header/Header";
import RepositoryTable from "../repositories/RepositoryTable";
import Footer from "../commons/footer/Footer";

class App extends Component{

    state = {
        language: ""
    };

    languageListener = event => {
        this.setState({language: event.target.value})
    };

    render() {
        return (
            <Fragment>
                <Header/>
                <section className="section">
                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label" htmlFor="language">Linguagem do repositório</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <div className="control">
                                    <div className="select is-grey-dark">
                                        <select name="language"
                                                id="language"
                                                required
                                                value={this.state.language}
                                                onChange={this.languageListener} >
                                            <option value="">Selecione a linguagem</option>
                                            <option value="java">Java</option>
                                            <option value="node">Nodejs</option>
                                            <option value="javascript">JavaScript</option>
                                            <option value="typescript">Typescript</option>
                                            <option value="kotlin">Kotlin</option>
                                            <option value="scala">Scala</option>
                                            <option value="go">Go</option>
                                            <option value="ruby">Ruby</option>
                                            <option value="c">C</option>
                                            <option value="cpp">C++</option>
                                            <option value="csharp">C#</option>
                                            <option value="php">PHP</option>
                                            <option value="python">Python</option>
                                            <option value="css">CSS</option>
                                            <option value="html">HTML</option>
                                            <option value="vue">Vue</option>
                                            <option value="c">C</option>
                                            <option value="dart">Dart</option>
                                            <option value="rust">Rust</option>
                                            <option value="elixir">Elixir</option>
                                            <option value="shell">Shell</option>
                                            <option value="assembly">Assembly</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <RepositoryTable language={this.state.language}  />
                </section>
                <Footer/>
            </Fragment>
        );
    }
}

export default App;
