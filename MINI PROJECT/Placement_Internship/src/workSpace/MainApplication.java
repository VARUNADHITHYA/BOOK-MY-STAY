package workSpace;

import java.sql.SQLException;
import java.util.List;
import java.util.Scanner;

 class MainApplication extends AbstractClass { //extends refers to inheritance
    private static final ApplicationDAO applicationDAO = new ApplicationDAO();//encapsulation coz its protected and we can use only within the class
    public static Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int choice;

        do {
            System.out.println("=== Placement & Internship Application Tracking ===");
            System.out.println("1. Apply for a placement/internship");
            System.out.println("2. View all applications");
            System.out.println("3. Update application status");
            System.out.println("4. Delete an application");
            System.out.println("5. Exit");
            System.out.print("Enter your choice: ");
            choice = scanner.nextInt();

            switch (choice) {
                case 1:
                    applyForPlacement(scanner);
                    break;
                case 2:
                    viewAllApplications();
                    break;
                case 3:
                    updateApplicationStatus(scanner);
                    break;
                case 4:
                    MainApplication mp = new MainApplication();
                    mp.deleteApplication();
                    break;
                case 5:
                    System.out.println("Exiting the application. Goodbye!");
                    break;
                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        } while (choice != 5);

        scanner.close();
    }

    private static void applyForPlacement(Scanner scanner) {
        System.out.println("=== Apply for a Placement/Internship ===");
        scanner.nextLine(); // Consume the newline character left by previous nextInt() call.

        System.out.print("Enter your name: ");
        String name = scanner.nextLine();

        System.out.print("Enter your email: ");
        String email = scanner.nextLine();

        System.out.print("Enter the position you are applying for: ");
        String position = scanner.nextLine();

        Application application = new Application();
        application.setName(name);
        application.setEmail(email);
        application.setPosition(position);
        application.setStatus(ApplicationStatus.APPLIED);

        try {
            applicationDAO.insertApplication(application);
            System.out.println("Application submitted successfully!");
        } catch (SQLException e) {
            System.out.println("Error occurred while submitting the application: " + e.getMessage());
        }
    }

    private static void viewAllApplications() {
        try {
            List<Application> applications = applicationDAO.getAllApplications();
            if (applications.isEmpty()) {
                System.out.println("No applications found.");
            } else {
                System.out.println("=== All Applications ===");
                for (Application application : applications) {
                    System.out.println(application);
                }
                System.out.println("=======================");
                
                // Display options to filter applications by status
                System.out.println("Filter applications by status:");
                for (ApplicationStatus status : ApplicationStatus.values()) {
                    System.out.println((status.ordinal() + 1) + ". " + status.name());
                }
                System.out.println("0. Back to main menu");

                Scanner scanner = new Scanner(System.in);
                System.out.print("Enter the status option: ");
                int statusOption = scanner.nextInt();

                if (statusOption == 0) {
                    return; // Return to the main menu
                }

                ApplicationStatus selectedStatus = ApplicationStatus.values()[statusOption - 1];
                System.out.println("=== Applications with status: " + selectedStatus.name() + " ===");
                for (Application application : applications) {
                    if (application.getStatus() == selectedStatus) {
                        System.out.println(application);
                    }
                }
                System.out.println("==============================");
            }
        } catch (SQLException e) {
            System.out.println("Error occurred while fetching applications: " + e.getMessage());
        }
    }

    private static void updateApplicationStatus(Scanner scanner) {
        System.out.print("Enter the application ID to update: ");
        int applicationId = scanner.nextInt();

        try {
            Application application = applicationDAO.getApplicationById(applicationId);
            if (application == null) {
                System.out.println("Application with ID " + applicationId + " not found.");
            } else {
                System.out.println("Current status: " + application.getStatus());
                System.out.println("Available statuses: ");
                for (ApplicationStatus status : ApplicationStatus.values()) {
                    System.out.println(status.name());
                }

                System.out.print("Enter the new status: ");
                scanner.nextLine(); // Consume the newline character left by previous nextInt() call.
                String statusInput = scanner.nextLine();
                ApplicationStatus newStatus = ApplicationStatus.valueOf(statusInput);

                application.setStatus(newStatus);
                applicationDAO.updateApplication(application);
                System.out.println("Application status updated successfully!");
            }
        } catch (IllegalArgumentException e) {
            System.out.println("Invalid status. Please enter a valid status.");
        } catch (SQLException e) {
            System.out.println("Error occurred while updating application status: " + e.getMessage());
        }
    }

    @Override //polymorphism
    public void deleteApplication() {//it is abstract class it is defined in Abstractclass.java
        System.out.print("Enter the application ID to delete: ");
        int applicationId = scanner.nextInt();

        try {
            applicationDAO.deleteApplication(applicationId);
            System.out.println("Application deleted successfully!");
        } catch (SQLException e) {
            System.out.println("Error occurred while deleting application: " + e.getMessage());
        }
    }
}
