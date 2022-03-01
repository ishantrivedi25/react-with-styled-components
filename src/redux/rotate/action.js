const rotateAction = {
    TOGGLE_ROTATION: "TOGGLE_ROTATION",
    toggleRotate: (payload) => ({
        type: rotateAction.TOGGLE_ROTATION,
        payload
    })

}

export default rotateAction;