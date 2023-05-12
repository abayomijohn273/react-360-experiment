import React from 'react';
import {
    asset,
    AppRegistry,
    NativeModules,
    StyleSheet,
    Text,
    View,
    VrButton
} from 'react-360';

const { AudioModule } = NativeModules;

export default class realestate_vr_project extends React.Component {
    state = {
        count: 0,
        playSound: false
    }

    _incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    _playSound = () => {
        this.setState({
            playSound: !this.state.playSound
        });

        if (this.state.playSound) {
            AudioModule.createAudio('sza', {
                source: asset('musci.mp3'),
                volume: 0.5
            });

            AudioModule.play('sza');
        }
        else {
            AudioModule.stop('sza');
        }
    }

    render() {
        return (
            <View style={styles.panel}>
                <VrButton
                    onClick={this._incrementCount}
                    style={styles.greetingBox}>
                    <Text style={styles.greeting}>
                        {`You have visited Simmes ${this.state.count} times`}
                    </Text>
                </VrButton>
                <VrButton
                    onClick={this._playSound}
                    style={styles.greetingBox}>
                    <Text style={styles.greeting}>
                        {'You can play the music of your people'}
                    </Text>
                </VrButton>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    panel: {
        // Fill the entire surface
        width: 1000,
        height: 600,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    greetingBox: {
        padding: 20,
        backgroundColor: '#000000',
        borderColor: '#639dda',
        borderWidth: 2,
    },
    greeting: {
        fontSize: 30,
    },
});

AppRegistry.registerComponent('realestate_vr_project', () => realestate_vr_project);
