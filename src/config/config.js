export default {
    __server: {
        domain: "https://localhost:7204",
        endpoint: "/api",
    },
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
                name: "Clients",
                icon: "",
                route: "/clients",
            },
            {
                name: "Account",
                icon: "",
                route: "/account",
            },
        ],
    },
    tables: {
        Clients: {
            disabled: ["pets", "billings", "medicId"],
        },
        Medicine: {
            disabled: [],
        },
        Medics: {
            disabled: ["clients", "clients", "appointments"],
        },
        Rooms: {
            disabled: ["appointments"],
        },
        Appointments: {
            disabled: [],
        },
        Bills: {
            disabled: [],
        },
    },
    billing: {
        appointment_price: 10
    }
};
