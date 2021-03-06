import css from 'styled-jsx/css'

export default css`
    .find-case-container {
        max-width: 1100px;
        margin: auto;
        padding: 40px;
        height: 100vh;
    }

    .search-container {
        padding: 40px;
        background-color: #f5f5f5;
    }

    .case-window-container {
        border: 1.5px solid #f5f5f5;
        min-height: 100vh;
    }

    .find-case-splash {
        padding: 120px 40px 40px 40px;
        text-align: center;
    }

    .error-message {
        position: absolute;
        margin-top: 10px;
        font-size: .9rem;
    }

    .loading-screen {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

@media screen and (max-width: 425px) {
    .find-case-container {
        padding: 20px;
        font-size:.8rem;
    }

        .search-container {
            padding: 20px 20px 25px 20px;
    }

        .error-message {
            margin-top: 5px;
            font-size: .8rem;
        }
}
`
