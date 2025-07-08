import React, { useState } from "react";
import axios from "axios";

function EditInformation({ user, onSave, onCancel }) {
  const [name, setName] = useState(user.name || "");
  const [department, setDepartment] = useState(user.department || "");
  const [role, setRole] = useState(user.role || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.put("http://localhost:8000/users/update", {
        email: user.email,
        name,
        department,
        role,
      });

      // Call parent's onSave with updated data after successful update
      onSave({ name, department, role });
    } catch (err) {
      console.error("Failed to update user info:", err);
      setError("Failed to update user info. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="edit-info-modal"
      style={{
        background: "rgba(0,0,0,0.2)",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 2000,
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#fff",
          padding: "2rem",
          borderRadius: "1rem",
          minWidth: 320,
          boxShadow: "0 2px 16px 0 rgba(0,0,0,0.12)",
        }}
      >
        <h3>Edit Information</h3>

        <label style={{ display: "block", marginBottom: 8 }}>
          Name:
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "100%", marginTop: 4, marginBottom: 12 }}
            disabled={loading}
          />
        </label>

        <label style={{ display: "block", marginBottom: 8 }}>
          Department:
          <input
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            style={{ width: "100%", marginTop: 4, marginBottom: 12 }}
            disabled={loading}
          />
        </label>

        <label style={{ display: "block", marginBottom: 8 }}>
          Role:
          <input
            value={role}
            onChange={(e) => setRole(e.target.value)}
            style={{ width: "100%", marginTop: 4, marginBottom: 16 }}
            disabled={loading}
          />
        </label>

        {error && (
          <p style={{ color: "red", marginBottom: 12, fontWeight: "bold" }}>
            {error}
          </p>
        )}

        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "flex-end",
          }}
        >
          <button
            type="button"
            onClick={onCancel}
            style={{
              background: "#eee",
              border: "none",
              borderRadius: 4,
              padding: "0.5rem 1.2rem",
              cursor: "pointer",
            }}
            disabled={loading}
          >
            Cancel
          </button>
          <button
            type="submit"
            style={{
              background: "#003366",
              color: "#fff",
              border: "none",
              borderRadius: 4,
              padding: "0.5rem 1.2rem",
              cursor: "pointer",
            }}
            disabled={loading}
          >
            {loading ? "Saving..." : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditInformation;
