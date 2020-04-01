import React, {Component} from "react";


class Navigation extends Component {

    goToPage = (): void => {
        this.props.goToPageListener(this.props.page);
    };

    render() {
        const currentPage = this.props.currentPage === this.props.page;
        let opts = {};
        if (currentPage) {
            opts['aria-current'] = 'page';
        }

        return (
            <li>
                <button className={`pointer pagination-link ${currentPage ? "is-current" : ""}`}
                        aria-label={`Ir para página ${this.props.page}`}
                        onClick={this.goToPage}
                        {...opts}>{this.props.page}</button>
            </li>
        )
    }

}

class Pagination extends Component {

    state = {
        language: '',
        currentPage: 1,
        navigationPages: [1, 2, 3, 4, 5]
    };

    goToPageListener = (page: number) => {
        if (page !== this.state.currentPage) {
            let navigationPages = this.state.navigationPages;
            if (this.state.navigationPages.indexOf(page) === 4) {
                navigationPages = this.state.navigationPages.map(num => num + 2)
            } else if (this.state.navigationPages.indexOf(page) ===0 && page !== 1) {
                navigationPages = [1, 2, 3, 4, 5]
            }

            this.setState({
                currentPage: page,
                navigationPages: navigationPages
            });

            this.props.pageChangeListener(page);
        }
    };

    goToPreviousPage = () => {
        let navigationPages = this.state.navigationPages;
        const previousPage = this.state.currentPage -1;

        if (this.state.navigationPages.indexOf(previousPage) === -1) {
            navigationPages = previousPage === 1 ? [1, 2, 3, 4, 5] : this.state.navigationPages.map(num => num-3)
        }

        this.setState({
            currentPage: previousPage,
            navigationPages: navigationPages
        });

        this.props.pageChangeListener(previousPage);
    };

    goToNextPage = () => {
        let navigationPages = this.state.navigationPages;
        const nextPage = this.state.currentPage +1;
        if (this.state.navigationPages.indexOf(nextPage) === -1) {
            navigationPages = this.state.navigationPages.map(num => num + 3)
        }

        this.setState({
            currentPage: nextPage,
            navigationPages: navigationPages
        });

        this.props.pageChangeListener(nextPage);
    };

    componentDidUpdate (prevProps) {
        const language = this.props.language;
        console.log("prev: "+prevProps.language);
        console.log("actual: "+language);
        if (prevProps.language !== language) {
            this.setState({
                currentPage: 1,
                navigationPages: [1, 2, 3, 4, 5]
            });
        }
    }

    render () {

        const navigation = this.state.navigationPages.map(page => {
                                                            return(
                                                                <Navigation key={page} goToPageListener={this.goToPageListener} currentPage={this.state.currentPage} page={page} />
                                                            )});

        return (
            <nav className="pagination is-centered" role="navigation" aria-label="pagination">
                <button className="pointer pagination-previous"
                        disabled={this.state.currentPage === 1}
                        onClick={this.goToPreviousPage}>Anterior</button>
                <button className="pointer pagination-next"
                        onClick={this.goToNextPage}>Próximo</button>
                <ul className="pagination-list">
                    {navigation}
                </ul>
            </nav>
        )
    };

}

export default Pagination;