import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ icon, titulo}) => {
    return (
        <nav className='navbar bg-primary'>
            <h1>
                <i className={icon} /> {titulo}
            </h1>
        </nav>
    );
};

Navbar.defaultProps = {
    titulo: 'Buscador Git',
    icon: 'fab fa-github'
};

Navbar.propTypes = {
    titulo: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

export default Navbar;
