USE MvcFormsUsersAndRoles
GO
BEGIN TRANSACTION;
BEGIN TRY
	DROP TABLE AspNetUserRoles
	DROP TABLE AspNetUserClaims
	DROP TABLE AspNetUserLogins
	DROP TABLE AspNetRoles
	DROP TABLE AspNetUsers
	DROP TABLE __MigrationHistory
	RAISERROR('Made it to here!',16,1);
END TRY
BEGIN CATCH
    SELECT 
         ERROR_NUMBER() AS ErrorNumber
        ,ERROR_SEVERITY() AS ErrorSeverity
        ,ERROR_STATE() AS ErrorState
        ,ERROR_PROCEDURE() AS ErrorProcedure
        ,ERROR_LINE() AS ErrorLine
        ,ERROR_MESSAGE() AS ErrorMessage;

    IF @@TRANCOUNT > 0
        ROLLBACK TRANSACTION;
END CATCH;

IF @@TRANCOUNT > 0
    COMMIT TRANSACTION;
GO