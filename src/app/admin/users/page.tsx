"use client";

import React from "react";
import Link from "next/link";
import styles from "../adminStyles/users.module.css";

const UsersManagement: React.FC = () => {
  const users = [
    {
      id: 1,
      username: "kafkyei",
      email: "kafkyei@example.com",
      role: "Admin",
      status: "Active",
      createdAt: "2023-05-01 10:30:00",
    },
    {
      id: 2,
      username: "johndoe",
      email: "johndoe@example.com",
      role: "Agent",
      status: "Active",
      createdAt: "2023-05-02 14:45:00",
    },
    {
      id: 3,
      username: "janesmith",
      email: "janesmith@example.com",
      role: "User",
      status: "Active",
      createdAt: "2023-05-03 09:15:00",
    },
    {
      id: 4,
      username: "mikebrown",
      email: "mikebrown@example.com",
      role: "Agent",
      status: "Active",
      createdAt: "2023-05-04 11:20:00",
    },
    {
      id: 5,
      username: "sarahlee",
      email: "sarahlee@example.com",
      role: "User",
      status: "Inactive",
      createdAt: "2023-05-05 16:30:00",
    },
  ];

  return (
    <div className={styles.usersWrapper}>
      {/* section 1 */}
      <div className={styles.headerStyles}>
        <h2>Users Management</h2>
      </div>
      {/* section 2 */}
      <div>
        <Link href="/admin/users/add" className={styles.btnLink}>
          <button type="submit" className={styles.btn}>
            Add New User
          </button>
        </Link>
      </div>

      {/* section 3 */}
      <form action="" className={styles.searchForm}>
        <input
          type="text"
          placeholder="Search users..."
          required
          className={styles.input}
        />
        <button type="submit" className={styles.submitBtn}>
          Search
        </button>
      </form>

      {/* section 4 */}
      <div className={styles.tableContainer}>
        <table className={styles.userTable}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Created At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.status}</td>
                <td>{user.createdAt}</td>
                <td>
                  <Link
                    href={`/admin/users/edit/${user.id}`}
                    className={styles.editBtn}
                  >
                    Edit
                  </Link>
                  <button className={styles.deleteBtn}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className={styles.pagination}>
        <button className={styles.pageBtn}>1</button>
        <button className={styles.pageBtn}>2</button>
        <button className={styles.pageBtn}>3</button>
        <button className={styles.pageBtn}>Next</button>
      </div>
    </div>
  );
};

export default UsersManagement;
