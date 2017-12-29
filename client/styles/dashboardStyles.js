import css from 'styled-jsx/css'

export default css`
    
    .dashboard-container {
        background-color: #1a2930;
        padding: 40px;
    }

    .client-header {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
    }

    .breadcrumb {
        padding: 0;
        margin: 0;
        /*border-bottom: 1.5px solid #f5f5f5;*/
        background-color: #ffffff; 
        border-bottom: 1.5px solid #f5f5f5;
        margin-bottom: 20px;
    }

    .breadcrumb-item {
        color: #999999;
        padding: 15px 0 15px 0;
        border-bottom: 1.5px solid #f5f5f5;
    }

    .breadcrumb-item:hover {
        cursor: pointer;
    }

    .is-active {
        color: #2c4551;
        border-color: #2c4551;
    }

    .not-active:hover{
        color: #777777;
    }

    .table-container {
        background-color: #ffffff;
        padding: 40px;
        height: 100%;
    }
    
    table {
        border: 1.5px solid #f5f5f5;
        border-radius: 3px;
        line-height: normal;
    }
    
    th {
        background-color: #f5f5f5;
        padding: 10px;
    }

    td {
        padding: 10px;
            border-top: 1.5px solid #f5f5f5;
        }
        
    .client-table {
        background-color: #ffffff;
        color: #28434f;
        width: 100%;
    }

    .client-name {
        color: #335260;
        font-weight: bold;
    }

    .client-name:hover {
        cursor: pointer;
    }

    .last-table-column {
        width: 13%;    
    }

    .hidden-x {
        opacity: 0;
    }

    .hidden-x:hover {
        opacity: .75;
        color: #ff2b2b;
        cursor: pointer;
    }

`