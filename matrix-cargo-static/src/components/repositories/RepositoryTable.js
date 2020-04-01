import React, {Component, Fragment} from "react";
import Pagination from "./Pagination";
import "./RepositoryTable.scss"
import RepositoryService from "../../services/RepositoryService";

const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>Usuário</th>
                <th>Repositório</th>
                <th>Descrição</th>
                <th>Linguagem</th>
            </tr>
        </thead>
    );
};

const TableFoot = () => {
    return (
        <tfoot>
            <tr>
                <th>Usuário</th>
                <th>Repositório</th>
                <th>Descrição</th>
                <th>Linguagem</th>
            </tr>
        </tfoot>
    );
};

const TableBody = (props) => {
    const rows = props.repositories.map(row => {
        return(
            <tr key={row.id.toString()} >
                <td>
                    <figure className="image is-48x48">
                        <img alt={`avatar of ${row.owner.login}`} src={row.owner.avatarUrl} />
                    </figure>
                    <p className="has-text-weight-medium">{row.owner.login}</p>
                </td>
                <td>{row.fullName}</td>
                <td>{row.description}</td>
                <td>{row.language}</td>
            </tr>
        )
    });

    return (
        <tbody>
            {rows}
        </tbody>
    );
};

class RepositoryTable extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentPage: 1,
            language: this.props.language,
            repositories:[]
        }
    }

    componentDidUpdate (prevProps) {
        const language = this.props.language;
        const pageOne = 1;

        if (prevProps.language !== language) {
            RepositoryService.find(pageOne, 10, language)
                .then(repositories => this.setState({
                    currentPage: pageOne,
                    language,
                    repositories
                }));
        }
    }

    pageChangeListener = (page: number): void => {
        const language = this.state.language;
        RepositoryService.find(page, 10, language)
            .then(repositories => this.setState({
                currentPage: page,
                language,
                repositories
            }));
    };

    render() {
        return (
            <Fragment>
                <div className={`${!this.state.repositories.length ? "is-hidden": ""}`}>
                    <table className="table margin-top-20 is-fullwidth" >
                        <TableHead />
                        <TableBody repositories={this.state.repositories}/>
                        <TableFoot />
                    </table>
                    <Pagination currentPage={this.state.currentPage}
                                language={this.state.language}
                                pageChangeListener={this.pageChangeListener}/>
                </div>
                <div className={`content has-text-centered ${this.state.repositories.length ? "is-hidden" : ""}`}>
                    <hr/>
                    <p>Não há repositórios para serem exibidos</p>
                    <hr/>
                </div>
            </Fragment>
        );
    }
}

export default RepositoryTable;