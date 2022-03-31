import PropTypes from 'prop-types'

const CustomButton = ({ color, text, onClick }) => {
    return (
        <button
            onClick={onClick}
            style={{ backgroundColor: color }}
            className='btn'
        >
            {text}
        </button>
    )
}

CustomButton.defaultProps = {
    color: 'steelblue',
}

CustomButton.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default CustomButton