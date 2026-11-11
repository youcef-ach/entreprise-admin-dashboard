import { test, describe } from "node:test";
import assert from "node:assert/strict";

describe("Enterprise Admin Dashboard - Data Models & Analytics Pipelines", () => {
  const mockTeam = [
    { id: 1, name: "Jon Snow", email: "jonsnow@gmail.com", age: 35, access: "admin" },
    { id: 2, name: "Cersei Lannister", email: "cerseilannister@gmail.com", age: 42, access: "manager" },
    { id: 3, name: "Jaime Lannister", email: "jaimelannister@gmail.com", age: 45, access: "user" },
    { id: 4, name: "Anya Stark", email: "anyastark@gmail.com", age: 16, access: "admin" },
    { id: 5, name: "Daenerys Targaryen", email: "daenerys@gmail.com", age: 31, access: "user" },
  ];

  const mockInvoices = [
    { id: 1, name: "Jon Snow", cost: "21.24", date: "03/12/2025" },
    { id: 2, name: "Cersei Lannister", cost: "1.24", date: "06/15/2025" },
    { id: 3, name: "Jaime Lannister", cost: "11.24", date: "05/02/2025" },
    { id: 4, name: "Anya Stark", cost: "80.55", date: "03/21/2025" },
    { id: 5, name: "Daenerys Targaryen", cost: "14.24", date: "01/12/2025" },
  ];

  const mockBarSeries = [
    { country: "AD", "hot dog": 137, burger: 100, kebab: 72 },
    { country: "AE", "hot dog": 55, burger: 150, kebab: 38 },
    { country: "AF", "hot dog": 109, burger: 23, kebab: 12 },
  ];

  test("Team roster enforces valid role permissions and unique identifiers", () => {
    assert.equal(mockTeam.length, 5);
    const ids = new Set(mockTeam.map((m) => m.id));
    assert.equal(ids.size, mockTeam.length);

    const validRoles = new Set(["admin", "manager", "user"]);
    for (const member of mockTeam) {
      assert.ok(validRoles.has(member.access));
      assert.match(member.email, /^.+@.+\..+$/);
      assert.ok(member.age >= 16);
    }
  });

  test("Workforce role distribution aggregates administrative ratios accurately", () => {
    const counts = mockTeam.reduce((acc, member) => {
      acc[member.access] = (acc[member.access] || 0) + 1;
      return acc;
    }, {});

    assert.equal(counts.admin, 2);
    assert.equal(counts.manager, 1);
    assert.equal(counts.user, 2);
  });

  test("Financial invoice pipeline parses currency strings to numeric totals", () => {
    assert.equal(mockInvoices.length, 5);
    const totalRevenue = mockInvoices.reduce((sum, inv) => sum + parseFloat(inv.cost), 0);
    assert.equal(Math.round(totalRevenue * 100) / 100, 128.51);
  });

  test("AntV G2 chart series contains compliant category tags and positive frequencies", () => {
    for (const record of mockBarSeries) {
      assert.ok(record.country);
      assert.ok(typeof record["hot dog"] === "number" && record["hot dog"] >= 0);
      assert.ok(typeof record.burger === "number" && record.burger >= 0);
      assert.ok(typeof record.kebab === "number" && record.kebab >= 0);
    }
  });
});
