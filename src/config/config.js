export default {
    __server: "localhost:8080",
    navbar: {
        title: "VetAppointment",
        logo: "",
        items: [
            {
                name: "Home",
                icon: "",
                route: "/",
            },
            {
                name: "Dashboard",
                icon: "",
                route: "/dashboard",
            },
            {
                name: "Appointments",
                icon: "",
                route: "/appointments",
            },
            {
                name: "Account",
                icon: "",
                route: "/account",
            },
        ],
    },
    tables: {
        test: {
            head: ["#Id", "First Name", "Last Name", "Appointment", "Medic", "Price"],
            body: {
                source: [
                    {
                        id: 1,
                        first_name: "test",
                        last_name: "testing",
                        appointment: "10-12",
                        medic: "medic",
                        price: "10$"
                    },
                    {
                        id: 2,
                        first_name: "test",
                        last_name: "testing",
                        appointment: "10-12",
                        medic: "medic",
                        price: "10$"
                    },
                    {
                        id: 3,
                        first_name: "test",
                        last_name: "testing",
                        appointment: "10-12",
                        medic: "medic",
                        price: "10$"
                    },
                    {
                        id: 4,
                        first_name: "test",
                        last_name: "testing",
                        appointment: "10-12",
                        medic: "medic",
                        price: "10$"
                    },
                    {
                        id: 5,
                        first_name: "test",
                        last_name: "testing",
                        appointment: "10-12",
                        medic: "medic",
                        price: "10$"
                    },
                ]
            }
        },
    },
};
