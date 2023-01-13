import React from 'react';

const Form =(props) => {
    const {handleChange,submitDisable,handleSubmit} =  props;
    const {name,email,password,checkbox} = props.member;

    return (
        <div>
            <form data-cy="test-submit" onSubmit={handleSubmit}>
                <label htmlFor="name" > İsim
                <input data-cy="test-name" id="name" name="name" onChange={handleChange} value={name} type="text" />
                </label>

                <label  htmlFor="email" > E-Mail :
                <input data-cy="test-email" id="email" name="email" onChange={handleChange} value={email} type="email" />
                </label>

                <label htmlFor="password" > Password
                <input data-cy="test-password" id="password" name="password" onChange={handleChange} value={password} type="password" />
                </label>

                <input data-cy="test-checkbox" id="checkbox" name="checkbox" onChange={handleChange} value={checkbox} type="checkbox" />
                <label htmlFor="checkbox" > Kullanım koşullarını kabul ediyorum. </label>

                <button data-cy="test-button" type="submit"  disabled={submitDisable} > Gönder Broo</button>
            </form>
        </div>
    )
};

export default Form ;