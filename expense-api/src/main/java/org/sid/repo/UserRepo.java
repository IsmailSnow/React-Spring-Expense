

package org.sid.repo;

import org.sid.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

/**  @Author Salmi Ismail**/

public interface UserRepo  extends JpaRepository<User,String> {

}

