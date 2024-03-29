import { PureComponent } from 'react';

import  ToastContainer  from 'react-toastify';
import Searchbar from './components/Searchbar/Searchbar';
import SearchForm from './components/SearchForm/SearchForm';
import SearchInfo from './components/SearchInfo/SearchInfo';

class App extends PureComponent {
    state = {
        imageValue: '',
    };

    handleFormSubmit = imageValue => {
        this.setState({ imageValue });
    };

    render() {
        return (
            <>
                <ToastContainer />
                <Searchbar>
                    <SearchForm onSubmit={this.handleFormSubmit} />
                </Searchbar>
                <SearchInfo imageValue={this.state.imageValue} />
            </>
        );
    }
}

export default App;
