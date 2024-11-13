namespace SKILLZ {
  type GetArticlesResponse = iArticles[];
  type GetArticlesRequest = void;

  type GetArticlesDetailsResponse = iArticles;
  type GetArticlesDetailsRequest = number;

  type GetCoursesResponse = iCourses[];
  type GetCoursesRequest = void;

  type GetCoursesDetailsResponse = iCourses;
  type GetCoursesDetailsRequest = number;

  type GetWorkShopsResponse = IWorkShops[];
  type GetWorkShopsRequest = void;

  type GetWorkShopsDetailsResponse = iArticles;
  type GetWorkShopsDetailsRequest = number;
}
