

package org.sid.repo;

import org.sid.entity.Expense;
import org.springframework.data.jpa.repository.JpaRepository;

/**  @Author Salmi Ismail**/

public interface ExpenseRepo extends JpaRepository<Expense,Long> {
	
}

