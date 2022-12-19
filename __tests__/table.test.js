const table = require("../src/modules/table");
require("jest-fetch-mock").disableMocks();

const url = "https://localhost:7204/api/clients";
const tableName = "Clients";

describe(`GET /${tableName}`, () => {
    it("should load all the clients", () => {
        table.fetchData("Clients").then((res) => {
            expect(res).toBeDefined();
        });
    });
});

describe(`POST /${tableName}`, () => {
    it("should create a client", () => {
        const newClient = {
            name: "jest",
            phoneNumber: "079999999",
            emailAddress: "jest@mail.com",
            address: "JS",
            medicId: "cc535902-0555-4e5b-bb3d-ed7a44889323",
        };
        table.postData("Clients", newClient).then((res) => {
            expect(res).toBeDefined();
            expect(res.id).toBeDefined();
            expect(res.name).toEqual("jest");
        });
    });
});

describe(`DELETE /${tableName}`, () => {
    it("should delete a client", () => {
        const clientId = "37863e4f-047a-4873-849c-052fc093c669";

        table.deleteData("Clients", clientId).then((res) => {
            expect(res).toBeDefined();
            expect(res).toEqual("deleted");
        });
    });
});

describe(`UPDATE /${tableName}`, () => {
    it("should update a client", () => {
        const updatedClient = {
            id: "37863e4f-047a-4873-849c-052fc093c669",
            name: "jest",
            phoneNumber: "jest123",
            emailAddress: "email@email.com",
            address: "string",
            medicId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        };

        table.updateData("Clients", updatedClient).then((res) => {
            expect(res).toBeDefined();
            expect(res.name).toEqual(updatedClient.name);
        });
    });
});
