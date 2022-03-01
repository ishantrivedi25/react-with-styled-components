import React from 'react';
import { connect } from "react-redux";

import './Home.css';
import logo from "../../assets/logo.svg";
import rotateAction from '../../redux/rotate/action';
import { getList } from '../../utils/helpers/common.helpers';
import { FEATURES } from '../../utils/constants/index';

const { toggleRotate } = rotateAction;

const Home = (props) => {
    const toggleSpinner = () => {
        props.toggleRotateAction({ rotating: !props.rotating });
    }

    return (
        <>
            <div className="App">
                <header className="App-header">
                    <h1>
                        The React Awesome Starter
                    </h1>
                    <div className="feature-container">
                        <div className="features">
                            <h2>Features:</h2>
                            {getList(FEATURES)}
                        </div>
                    </div>
                    <p>Click on React logo to Pause/Resume Spinner</p>
                    <img
                        src={logo}
                        className={
                            "App-logo" +
                            (props.rotating ? "" : " App-logo-paused")
                        }
                        alt="logo"
                        onClick={toggleSpinner}
                    />
                </header>
            </div>
        </>
    );
}

const mapStateToProps = state => ({
    rotating: state.rotate.rotating
});

const mapDispatchToProps = dispatch => ({
    toggleRotateAction: (isRotate) => dispatch(toggleRotate(isRotate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);