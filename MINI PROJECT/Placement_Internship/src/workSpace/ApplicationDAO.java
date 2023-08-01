package workSpace;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class ApplicationDAO {
    private final String jdbcURL = "jdbc:mysql://localhost/placement_internship";
    private final String jdbcUsername = "root";
    private final String jdbcPassword = "TIGER";

    private static final String INSERT_APPLICATION_SQL = "INSERT INTO applications (name, email, position, status) VALUES (?, ?, ?, ?)";
    private static final String UPDATE_APPLICATION_SQL = "UPDATE applications SET name=?, email=?, position=?, status=? WHERE id=?";
    private static final String DELETE_APPLICATION_SQL = "DELETE FROM applications WHERE id=?";
    private static final String SELECT_ALL_APPLICATIONS_SQL = "SELECT * FROM applications";
    private static final String SELECT_APPLICATION_BY_ID_SQL = "SELECT * FROM applications WHERE id=?";

    public ApplicationDAO() {
    }

    private Connection getConnection() throws SQLException {
        return DriverManager.getConnection(jdbcURL, jdbcUsername, jdbcPassword);
    }

    public void insertApplication(Application application) throws SQLException {
        try (Connection connection = getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(INSERT_APPLICATION_SQL)) {
            preparedStatement.setString(1, application.getName());
            preparedStatement.setString(2, application.getEmail());
            preparedStatement.setString(3, application.getPosition());
            preparedStatement.setString(4, application.getStatus().name());
            preparedStatement.executeUpdate();
        }
    }

    public void updateApplication(Application application) throws SQLException {
        try (Connection connection = getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(UPDATE_APPLICATION_SQL)) {
            preparedStatement.setString(1, application.getName());
            preparedStatement.setString(2, application.getEmail());
            preparedStatement.setString(3, application.getPosition());
            preparedStatement.setString(4, application.getStatus().name());
            preparedStatement.setInt(5, application.getId());
            preparedStatement.executeUpdate();
        }
    }

    public void deleteApplication(int applicationId) throws SQLException {
        try (Connection connection = getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(DELETE_APPLICATION_SQL)) {
            preparedStatement.setInt(1, applicationId);
            preparedStatement.executeUpdate();
        }
    }

    public List<Application> getAllApplications() throws SQLException {
        List<Application> applications = new ArrayList<>();
        try (Connection connection = getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(SELECT_ALL_APPLICATIONS_SQL);
             ResultSet resultSet = preparedStatement.executeQuery()) {
            while (resultSet.next()) {
                int id = resultSet.getInt("id");
                String name = resultSet.getString("name");
                String email = resultSet.getString("email");
                String position = resultSet.getString("position");
                ApplicationStatus status = ApplicationStatus.valueOf(resultSet.getString("status"));

                Application application = new Application();
                application.setId(id);
                application.setName(name);
                application.setEmail(email);
                application.setPosition(position);
                application.setStatus(status);

                applications.add(application);
            }
        }
        return applications;
    }

    public Application getApplicationById(int applicationId) throws SQLException {
        try (Connection connection = getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(SELECT_APPLICATION_BY_ID_SQL)) {
            preparedStatement.setInt(1, applicationId);
            try (ResultSet resultSet = preparedStatement.executeQuery()) {
                if (resultSet.next()) {
                    int id = resultSet.getInt("id");
                    String name = resultSet.getString("name");
                    String email = resultSet.getString("email");
                    String position = resultSet.getString("position");
                    ApplicationStatus status = ApplicationStatus.valueOf(resultSet.getString("status"));

                    Application application = new Application();
                    application.setId(id);
                    application.setName(name);
                    application.setEmail(email);
                    application.setPosition(position);
                    application.setStatus(status);

                    return application;
                }
            }
        }
        return null;
    }
}
