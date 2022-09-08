import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import UsersIndex from "../Pages/Users";
import UserShow from "../Pages/Users/show";

function App() {
    return (
        <BrowserRouter>
            <div className="min-h-screen bg-gray-100">
                <nav className="bg-white border-b border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex">
                                <div className="shrink-0 flex items-center">
                                    <a href="/">
                                        Users
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </nav>

                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        </h2>
                    </div>
                </header>

                <main>
                    <div className="py-12">
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                <div className="p-6 bg-white border-b border-gray-200">
                                    <Routes>
                                        <Route path="/" element={<UsersIndex/>}></Route>
                                        <Route path="/user/:id" element={<UserShow/>}></Route>
                                    </Routes>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </BrowserRouter>
    )
}

export default App;