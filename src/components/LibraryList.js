import React from 'react';
import {ListView, View} from 'react-native';
import {connect} from 'react-redux';
import Item from './Item';

class LibraryList extends React.Component {
    render() {
        return (
            <ListView
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })

        this.dataSource = ds.cloneWithRows(this.props.libraries);
    }
    renderRow(library) {
        return <Item data={library}/>
    }
}

const mapStateToProps = state => {
    return {libraries: state.libraries};
}

export default connect(mapStateToProps)(LibraryList);