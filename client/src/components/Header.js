import PropTypes from 'prop-types'
import CustomButton from './Button'

const Header = ({ title, buttonText, onAdd, showAdd }) => {
    //const location = useLocation();

    return (
        <header className='header'>
            <h1>{title}</h1>
            <CustomButton
                color={showAdd ? 'red' : 'green'}
                text={showAdd ? 'Close' : buttonText}
                onClick={onAdd}
            />
        </header>
    )
}

Header.defaultProps = {
    title: 'Header',
    buttonText: 'Add'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }

export default Header