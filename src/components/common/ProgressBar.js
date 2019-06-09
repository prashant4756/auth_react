import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const ProgressBar = ({ size }) => {
    return(
        <View style={styles.progressStyle}>
            <ActivityIndicator size={ size || 'large' }/>
        </View>
    );
};

const styles = {
    progressStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export { ProgressBar };
