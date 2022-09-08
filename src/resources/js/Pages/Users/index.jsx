import { Component } from "react";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";

class UsersIndex extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        }
    }

    fetchUsers() {
        axios.get('/users')
            .then(response => this.setState({ users: response.data.data}))
    }

    componentDidMount() {
        this.fetchUsers()
    }

    renderUsers() {
        return this.state.users.map(user => <tr key={user.id}>
            <td>{ user.id }</td>
            <td><Link to={"/user/" + user.id}>{ user.first_name } { user.last_name }
            </Link></td>
            <td>{ user.email }</td>
        </tr>
    )
    }

    render() {
        return (
            <div className="overflow-hidden overflow-x-auto p-6 bg-white border-gray-200">
                <div className="min-w-full align-middle">
                    <table className="table">
                        <thead className="table-header">
                        <tr>
                            <th>
                                <span>ID</span>
                            </th>
                            <th>
                                <span>Vārds uzvārds</span>
                            </th>
                            <th>
                                <span>E-pasts</span>
                            </th>
                        </tr>
                        </thead>
                        <tbody className="table-body">
                        { this.renderUsers() }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default UsersIndex