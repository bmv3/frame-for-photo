import InputRange from "./InputRange"

const Form = ({ handlerSetRation, handlerHorizontalOffset, handlerVerticalOffset, ration, horizontalOffset, verticalOffset }) => {
    return (
        <div className="form">
            <InputRange
                label="Ration"
                id="ration"
                min="-100"
                max="100"

                value={ration}
                onChange={(e) => { handlerSetRation(e) }}
            />
            <InputRange
                label="Horizontal"
                id="horizontalOffset"
                value={horizontalOffset}
                onChange={(e) => { handlerHorizontalOffset(e) }}
            />
            <InputRange
                label="Vertical"
                id="verticalOffset"
                value={verticalOffset}
                onChange={(e) => { handlerVerticalOffset(e) }}
            />
        </div>
    )
}

export default Form