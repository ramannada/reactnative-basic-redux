import React from 'react';
import {
    View,
    TouchableWithoutFeedback,
    Text,
    LayoutAnimation
} from 'react-native';
import {CardSection} from './common';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Item extends React.Component{
    render() {
        const {id, title} = this.props.data;
        
        return(
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>{title}</Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }

    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDescription() {
        const {expanded, data} = this.props;

        if (expanded) {
            return(
                <CardSection>
                    <Text style={styles.expanded}>{data.description}</Text>
                </CardSection>
            );
        }
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 5   
    },
    descriptionStyle: {
        flex: 1,
    }
}

const mapStateToProps = (state, props) => {
    const expanded = state.selectedLibraryId === props.data.id;
    
    return {expanded}
}

export default connect(mapStateToProps, actions)(Item);