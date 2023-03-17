public class UserHierarchy_1 {
    

    public static Map<Id, List<User>> buildHierarchy() {
        
    
        List<User> allUsers = [SELECT Id, Name, ManagerId FROM User];
        
   
        Map<Id, List<User>> hierarchy = new Map<Id, List<User>>();
        
        for (User u : allUsers) {
            

            if (u.ManagerId == null) {
                hierarchy.put(null, new List<User>{u});
            }
        
            else {
                if (!hierarchy.containsKey(u.ManagerId)) {
                    hierarchy.put(u.ManagerId, new List<User>{u});
                }
                else {
                    hierarchy.get(u.ManagerId).add(u);
                }
            }
        }
        
        return hierarchy;
    }

}