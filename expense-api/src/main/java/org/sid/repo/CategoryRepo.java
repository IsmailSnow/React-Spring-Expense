

package org.sid.repo;

import org.sid.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

/**  @Author Salmi Ismail**/

public interface CategoryRepo extends JpaRepository<Category, Long>{
	Category findByName(String name);
}

